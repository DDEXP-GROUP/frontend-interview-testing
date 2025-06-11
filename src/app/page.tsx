import Image from "next/image";




export default function Card() {
  return (
    <div className="min-h-screen p-8 pb-10 gap-16 sm:p-20 bg-white flex"
      style={{
        background: `url(/images/lv5_bg.svg) center /cover no-repeat`,
      }}>
      <div className="text-white flex-1 flex flex-col justify-center items-center font-bold text-2xl">
        Edit file here
      </div>
    </div>


  );
}
