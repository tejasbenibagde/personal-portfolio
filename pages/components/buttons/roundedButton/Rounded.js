
export default function Rounded({ children, bg, cursor }) {
  return (
    <div style={{ backgroundColor: bg, cursor: cursor ? 'pointer' : 'default' }} className="w-[40vw] h-[40vw] md:h-[20vw] md:w-[20vw] lg:h-[16vw] lg:w-[16vw] xl:h-[12vw] xl:w-[12vw] rounded-full bg-[var(--pink)] flex items-center justify-center">
      {children}
    </div>
  )
}
