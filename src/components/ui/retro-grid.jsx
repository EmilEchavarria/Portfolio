/*import { cn } from "@/lib/utils";

export function RetroGrid({
  className,
  angle = 65,
  cellSize = 60,
  opacity = 0.5,
  lightLineColor = "gray",
  darkLineColor = "gray",
  ...props
}) {
  const gridStyles = {
    "--grid-angle": `${angle}deg`,
    "--cell-size": `${cellSize}px`,
    "--opacity": opacity,
    "--light-line": lightLineColor,
    "--dark-line": darkLineColor
  };

  return (
    <div
      className={cn(
        "pointer-events-none absolute size-full overflow-hidden [perspective:200px] transition-opacity duration-500 ease-in-out",
        `opacity-[var(--opacity)]`,
        className
      )}
      style={gridStyles}
      {...props}>
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div
          className="animate-grid [background-image:linear-gradient(to_right,var(--light-line)_1px,transparent_0),linear-gradient(to_bottom,var(--light-line)_1px,transparent_0)] [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)] [height:300vh] [inset:0%_0px] [margin-left:-200%] [transform-origin:100%_0_0] [width:600vw] dark:[background-image:linear-gradient(to_right,var(--dark-line)_1px,transparent_0),linear-gradient(to_bottom,var(--dark-line)_1px,transparent_0)]" />
      </div>
      <div
        className="absolute inset-0 bg-gradient-to-t from-white to-transparent to-90% dark:from-black" />
    </div>
  );
}

export default {RetroGrid}; */
import PropTypes from 'prop-types'; // Importa PropTypes
import { cn } from "@/lib/utils";
import "./retro-grid.css";

export function RetroGrid({
  className,
  angle = 70,           // Parámetro predeterminado aquí
  cellSize = 60,        // Parámetro predeterminado aquí
  opacity = 0.5,        // Parámetro predeterminado aquí
  lightLineColor = "white", // Parámetro predeterminado aquí
  darkLineColor = "gray",  // Parámetro predeterminado aquí
  ...props
}) {
  const gridStyles = {
    "--grid-angle": `${angle}deg`,
    "--cell-size": `${cellSize}px`,
    "--opacity": opacity,
    "--light-line": lightLineColor,
    "--dark-line": darkLineColor
  };

  return (
    <div
      className={cn(
        "pointer-events-none absolute size-full overflow-hidden [perspective:200px] transition-opacity duration-500 ease-in-out",
        `opacity-[var(--opacity)]`,
        className
      )}
      style={gridStyles}
      {...props}>
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div
          className="animate-grid [background-image:linear-gradient(to_right,var(--light-line)_1px,transparent_0),linear-gradient(to_bottom,var(--light-line)_1px,transparent_0)] [background-repeat:repeat] [background-size:var(--cell-size)_var(--cell-size)] [height:300vh] [inset:0%_0px] [margin-left:-200%] [transform-origin:100%_0_0] [width:600vw] dark:[background-image:linear-gradient(to_right,var(--dark-line)_1px,transparent_0),linear-gradient(to_bottom,var(--dark-line)_1px,transparent_0)]" />
      </div>
      <div
        className="absolute inset-0 bg-gradient-to-t from-black to-transparent to-90% dark:from-blue" />
    </div>
  );
}

// Agregar validaciones de PropTypes
RetroGrid.propTypes = {
  className: PropTypes.string,
  angle: PropTypes.number,
  cellSize: PropTypes.number,
  opacity: PropTypes.number,
  lightLineColor: PropTypes.string,
  darkLineColor: PropTypes.string,
};

export default RetroGrid;
