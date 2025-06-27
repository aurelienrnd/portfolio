/** Affiche un Loader pendant le chargement
 * @description - Affiche un indicateur de chargement.
 * @returns {JSX.Element} - Un indicateur de chargement.
 */
function Loader() {
  return (
    <div className="h-1/3 flex w-1/2  items-center justify-center">
      <div className="bg-color-three h-1 fake-loader rounded-md"></div>
    </div>
  );
}

export default Loader;
