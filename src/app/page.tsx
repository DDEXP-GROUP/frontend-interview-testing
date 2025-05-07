
export default function Card() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-10 gap-16 sm:p-20 bg-white"
    style={{
      background: `url(/images/home/levelup_lv5.svg) center /cover no-repeat`,
    }}>
      <div className="text-center text-gray-900 text-2xl font-semibold mt-10">
      สวัสดี !! Hi Interviewer !!
      <br /> Please edit file here
      </div>
    </div>
  );
}
