"use client";
import { cva } from "class-variance-authority";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";

import { cn } from "@/lib/utils";

const DEFAULT_SIZE = 80;
const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 20;

const dockVariants = cva(
  "fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800/80 backdrop-blur-md text-white border border-gray-600 rounded-2xl p-2 flex gap-2 items-center"
);

const Dock = React.forwardRef(
  (
    {
      className,
      children,
      iconSize = DEFAULT_SIZE,
      iconMagnification = DEFAULT_MAGNIFICATION,
      iconDistance = DEFAULT_DISTANCE,
      height = "50px", // Altura por defecto del Dock
      ...props
    },
    ref
  ) => {
    const mouseX = useMotionValue(Infinity);
    const [dynamicHeight, setDynamicHeight] = useState(height); // Estado para la altura dinámica

    // Ajustar la altura dinámicamente según el ancho de la pantalla
    useEffect(() => {
      const updateHeight = () => {
        if (window.innerWidth <= 320) {
          setDynamicHeight("45px"); // Altura menor para pantallas muy pequeñas
        } else if (window.innerWidth <= 480) {
          setDynamicHeight("50px"); // Altura intermedia para pantallas pequeñas
        } else {
          setDynamicHeight(height); // Altura por defecto para pantallas más grandes
        }
      };

      updateHeight(); // Establece la altura inicial
      window.addEventListener("resize", updateHeight); // Escucha cambios en el tamaño de la pantalla

      return () => window.removeEventListener("resize", updateHeight); // Limpia el listener
    }, [height]);

    const renderChildren = () => {
      return React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === DockIcon) {
          return React.cloneElement(child, {
            ...child.props,
            mouseX: mouseX,
            size: iconSize,
            magnification: iconMagnification,
            distance: iconDistance,
          });
        }
        return child;
      });
    };

    return (
      <motion.div
        ref={ref}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        {...props}
        className={cn(dockVariants({ className }))}
        style={{ height: dynamicHeight }} // Usa la altura dinámica
      >
        {renderChildren()}
      </motion.div>
    );
  }
);

Dock.displayName = "Dock";

Dock.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  iconSize: PropTypes.number,
  iconMagnification: PropTypes.number,
  iconDistance: PropTypes.number,
  height: PropTypes.string, // Añade PropTypes para la altura
};

const DockIcon = ({
  size = DEFAULT_SIZE,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mouseX,
  label,
  className,
  children,
  ...props
}) => {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  const defaultMouseX = useMotionValue(Infinity);
  const [dynamicMagnification, setDynamicMagnification] = useState(magnification);

  // Ajustar el tamaño dinámicamente según el ancho de la pantalla
  useEffect(() => {
    const updateMagnification = () => {
      if (window.innerWidth <= 320) {
        setDynamicMagnification(45); // Tamaño menor para pantallas pequeñas
      } else if (window.innerWidth <= 480) {
        setDynamicMagnification(50); // Tamaño intermedio
      } else {
        setDynamicMagnification(DEFAULT_MAGNIFICATION); // Valor por defecto
      }
    };

    updateMagnification();
    window.addEventListener("resize", updateMagnification);

    return () => window.removeEventListener("resize", updateMagnification);
  }, []);

  const distanceCalc = useTransform(mouseX ?? defaultMouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const sizeTransform = useTransform(distanceCalc, [-distance, 0, distance], [dynamicMagnification, size, dynamicMagnification]);
  const scaleSize = useSpring(sizeTransform, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <div className="relative flex flex-col items-center">
      {hovered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute bottom-full mb-2 px-2 py-1 bg-gray-1000 text-white text-xs rounded-md shadow-lg dock-label"
        >
          {label}
        </motion.div>
      )}
      <motion.div
        ref={ref}
        style={{ width: scaleSize, height: scaleSize }}
        className={cn("flex cursor-pointer items-center justify-center rounded-full", className)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        {...props}
      >
        {children}
      </motion.div>
    </div>
  );
};

DockIcon.displayName = "DockIcon";

DockIcon.propTypes = {
  size: PropTypes.number,
  magnification: PropTypes.number,
  distance: PropTypes.number,
  mouseX: PropTypes.object,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

export { Dock, DockIcon, dockVariants };