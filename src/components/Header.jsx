const Header = () => {
 return (
  <div className="isolate relative top-4 h-40 w-full flex items-center justify-center">
    <div class="relative w-full max-w-lg">
    <div class="absolute top-5 left-20 w-28 h-28 bg-gradient-middle rounded-full mix-blend-multiply filter blur-xl animate-blob opacity-40"></div>
    <div class="absolute top-0 left-48 w-28 h-28 bg-gradient-start rounded-full mix-blend-multiply filter blur-xl animate-blob opacity-60 animation-delay-2000"></div>
    <div class="absolute bottom-4 left-32 w-28 h-28 bg-gradient-end rounded-full mix-blend-multiply filter blur-xl animate-blob opacity-50 animation-delay-4000"></div>
   <div className="relative top-6 left-36 w-40">
    <img className="object-cover object-center h-full w-full" src="https://raw.githubusercontent.com/SunnyXdm/SunnyXdm.github.io/master/20210620_201351.png" alt=""></img>
    </div>
  </div></div>
 )
}

export default Header
