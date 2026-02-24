import FCTCMediaPlayerYew from "./_components/FCTCMediaPlayerYew";
import OxidizedMediaPlayer from "./_components/OxidizedMediaPlayer";
import OxidizedMediaPlayerBundlerEdition from "./_components/OxidizedMediaPlayerBundlerEdition";

export default function Home() {
  return (
    <div>
      <div className="border border-red-500 border-4 rounded-3xl m-4 p-4 text-center">
        <OxidizedMediaPlayer/>
      </div>

      {/* <div className="border border-green-500 border-4 rounded-3xl m-4 p-4 text-center">
        <OxidizedMediaPlayerBundlerEdition/>
      </div> */}

      {/* <div className="border border-blue-500 border-4 ">
        <FCTCMediaPlayerYew/>
      </div> */}
    </div>
  );
}
