import { Link } from "react-router-dom";
import SVGComponent from "./svg_Vid_Section";
import SVGComponent_yt from './svg_yt_button';
import SVGComponent_NEWS from "./svg_News_Section ";
const NavBar = () => {

    return(
    <div className="min-h-screen flex justify-center flex-col">
        <div className="hidden md:flex">
        <Link to='/'>Home</Link>
        <Link to='/'>Home</Link>
        <Link to='/'>Home</Link>
        <Link to='/'>Home</Link>

        </div>

        {/*This page is interesting as the majority of the page are images
        I had this mindset of trying to create shapes by drawing them out in css
        format using transform etc. Making a transparent image of the shape you want 
        with divs overlaying them is a smart idea
        */}
      
        {/*Also noticed that the mobile page has fewer transitions and unique affects. Wonder why.*/}
        <div id='header' className=" relative flex   overflow-x-hidden md:hidden ">
            <img src="https://www.guiltygear.com/ggst/en/wordpress/wp-content/themes/ggst/img/top/kv@sp-n5idg73diw3.jpg" className="  top-0 -z-10" alt=""/>

                <div className="absolute items-center justify-center flex z-10 top-0 w-full h-[20%] bg-Top-home bg-cover bg-opacity-[96%] mb-6 pb-14">
                    <img src="https://www.guiltygear.com/ggst/en/wordpress/wp-content/themes/ggst/img/logo.png" alt="" className="h-auto w-[95%]" />
                    <div className="absolute flex -bottom-14 right-0 cursor-pointer">
                        <img src="https://www.guiltygear.com/ggst/en/wordpress/wp-content/themes/ggst/img/menu.png" className=" h-[15vw]" alt=""/>    
                    </div>
                {/*Had alot of trouble sizing the page until I figure out how the vw unit worked. Such a good combo with flex and useful for the mobile side */}
                    <div className=" absolute w-[50vw]  -bottom-[130%] -pb-2 right-0 cursor-pointer">
                        <img src="https://www.guiltygear.com/ggst/en/wordpress/wp-content/uploads/2022/07/AWT2022_log_o.png" className="" alt=""/>
                    </div>    
                {}
                    <div className=" absolute flex h-auto justify-center  -bottom-[300%] ">
                        <img src="https://www.guiltygear.com/ggst/en/wordpress/wp-content/themes/ggst/img/top/kv_character@sp.png"  alt=""/>
                        <p className="z-30 absolute  top-7 text-[5.5vw] text-zinc-50 font-bold text-shadow-GG ">Sin joins the roster!</p>
                        <button type="" className="z-30 absolute  top-[16vw] text-[3.9vw] font-bold text-zinc-50 border-0 border-t 
                        px-[17vw] bg-black pb-[2.2vw] pt-[1.1vw] border-solid hover:bg-opacity-10 transition-colors duration-150 bg-opacity-100 tracking-wide ">Learn more</button>
                    </div>    
                    <div className="absolute flex -bottom-[385%] w-[80%]  -right-0">
                        <img className="absolute flex h-[25vw] -left-[20vw] pl-2" src="https://www.guiltygear.com/ggst/en/wordpress/wp-content/themes/ggst/img/top/package.png" alt=""/>
                        <img className="h-[30vw] " src="https://www.guiltygear.com/ggst/en/wordpress/wp-content/themes/ggst/img/top/kv_products@sp.png"  alt=""/>
                        <p className="z-30 absolute flex top-[3.7vw] text-shadow-GG text-white text-[6vw] font-extrabold left-[12vw] w-full overflow-x-hidden">NOW ON SALE</p>
                        <p className="z-30 absolute flex top-[11vw] text-shadow-GG text-white text-[5vw] left-[12vw]">BUY NOW!</p>

                    </div>
                  
                </div>   
                </div>

                {/*I had an issue of stacking the individual flex containers together until I found out that one of them had a height of zero.
                Now I have the habit of checking each container size to see if they are correct.
                */}
                <div className="  flex md:hidden h-auto z-40">
                    <img className=" relative w-screen  " src="https://www.guiltygear.com/ggst/en/wordpress/wp-content/themes/ggst/img/top/sp_contents.jpg" alt=""/>
                    <div className=" w-full overflow-x-hidden absolute">
                        {/*This was pretty fun to do. Trying to make the ul with the actual menu image.
                        What made this even cooler was that my idea of overlapping the image with a color to hover over worked! 
                        */}
                        <ul className="">
                        <li className="h-[42vw] w-[92%] mt-5 ml-5 cursor-pointer hover:bg-gray-500  opacity-[15%]"></li>

                        <div className="flex flex-row">
                            <li className="h-[41vw]  w-[47%] mt-2 ml-4 cursor-pointer hover:bg-gray-500  opacity-[15%]"></li>
                            <li className="h-[41vw] w-[47%] mt-2 ml-2 cursor-pointer hover:bg-gray-500  opacity-[15%]"></li>                            
                        </div>

                        <div className="flex flex-row">
                            <li className="h-[23vw] w-[47%] mt-2 ml-2 cursor-pointer hover:bg-gray-500  opacity-[15%]"></li>
                            <li className="h-[23vw] w-[47%] mt-2 ml-2 cursor-pointer hover:bg-gray-500  opacity-[15%]"></li>                      
                        </div>
                        </ul>
                    </div>
                </div>   
                {/*I notice I would check back and forth with the browser debug to check the size of each div.
                It takes time doing that so I decide to first make each div have a border, using it as a cast for the content inside.
                */}
                <div className=" bg-[#262626]  h-auto flex md:hidden z-10">
                    <img className="relative w-screen " src="https://www.guiltygear.com/ggst/en/wordpress/wp-content/themes/ggst/img/top/bg_trailer@sp.png" alt=""/>
                    <div className=" mt-[10vw] ml-5 absolute w-[70vw]  h-[35vw]">
                        <h1 className=" z-40 text-white text-[16vw] leading-[5rem]  font-bold text-shadow-GG">LATEST TRAILER</h1>
                    </div>
                    <div className="absolute  mt-[45vw] ml-5 w-[50vw] h-[10vw]">
                        <h4 className="text-[5.5vw] text-white ">2022.11.22 UP</h4>
                    </div>
                    <div className=" mt-[61vw] right-0 absolute w-[70vw] flex justify-center items-center h-[35vw]">
                        <img src="http://img.youtube.com/vi/WEaM_aNtkLE/maxresdefault.jpg" alt=""/>
                        <i className="absolute z-50 "><SVGComponent_yt/></i>

                    </div>

                   <div className=" absolute mt-[110vw] p-3 ml-[15vw] bg-red-600 shadow-2xl shadow-black drop-shadow-2xl">
                   <a href="/" className="text-white text-[6vw] flex flex-row font-semibold">
                    {/*
                    First time drawing a svg, I could not make that G to save my life. Also couldn't figure out how to remove excessive white space
                    So I found a site called https://www.svgviewer.dev/ which I will be using for now on for svg.

                    Had to do some edits on the premade svg, such as adding vw instead px
                    */}

                    <i className="mt-[1vw] mr-[2vw] "><SVGComponent/></i>
                    To the VIDEO section</a>
                   </div>
                    
                </div>     
                {/*For some reason the og page likes to click the last letter of a title. Probably a design choice
                Same with hiding letters behind an img for a 3d effect
                */}
                <div className="h-auto flex md:hidden ">
                    <img className="relative w-screen" src="https://www.guiltygear.com/ggst/en/wordpress/wp-content/themes/ggst/img/top/bg_news@sp.jpg" alt=""/>
                    <img className=" absolute mt-[2vw] z-50" src="https://www.guiltygear.com/ggst/en/wordpress/wp-content/themes/ggst/img/top/bg_news@sp.png" alt=""/>
                    <div className="  h-[20vw] w-[47vw] mt-[12vw] z-20 absolute right-0 mr-[1vw] ">
                        <p className="absolute text-[16vw] font-extrabold text-red-600 ">NEWS</p>
                    </div>
                    <div className="  h-[18vw] w-[28vw] mt-[30vw] z-20 absolute right-0 mr-[5vw] ">
                        <p className="absolute text-[10vw]  text-red-600 ">TOPICS</p>
                    </div>
                </div>   
                <div className=" bg-[#262626] h-[125.5vw] z-20 -mt-[12.6vw] overflow-x-hidden flex flex-row md:hidden">
                    <div className="flex flex-col w-[50%]">
                        <ul>
                            <li><img  src="https://www.guiltygear.com/ggst/en/wordpress/wp-content/uploads/2022/07/news-.jpg" alt=""/></li>
                            <li className="mt-[.5vw] "><img src="https://www.guiltygear.com/ggst/en/wordpress/wp-content/themes/ggst/img/news/default.jpg" alt=""/></li>
                            <li className="mt-[.5vw] "><img src="https://www.guiltygear.com/ggst/en/wordpress/wp-content/uploads/2020/10/0325-820x461.jpg" alt=""/></li>
                        </ul>                        
                    </div>
                    {/*Nearly forgot how useful gap is*/}
                    <div className="flex flex-col">
                        <ul className="absolute flex flex-col gap-[.5vw] text-white w-[50%]">
                            <li className="h-[27vw]  pl-[5vw] pt-[5vw] bg-black ">Official images for use by fans of Guilty Gear -Stri...</li>
                            <li className="h-[27vw] pl-[5vw] pt-[5vw] bg-black">Video Policy</li>
                            <li className="h-[27.7vw]  pl-[5vw] pt-[5vw] bg-black">Pre-purchase FAQ[Updated August 2 2022]</li>
                        </ul>                        
                    </div>

                    <div className=" absolute mt-[90vw] p-3 ml-[14vw] bg-red-600 shadow-2xl shadow-black drop-shadow-2xl">
                        <a href="/" className="text-white text-[6vw] flex flex-row font-semibold">
                            {/*
                            First time drawing a svg, I could not make that G to save my life. Also couldn't figure out how to remove excessive white space
                            So I found a site called https://www.svgviewer.dev/ which I will be using for now on for svg.

                            Had to do some edits on the premade svg, such as adding vw instead px
                            */}

                            <i className="mt-[1vw] mr-[2vw] "><SVGComponent_NEWS/></i>
                            To the NEWS section</a>

                   </div>
                   <div className="absolute  mt-[110vw] ml-[5vw] text-red-500">
                    <p className="text-[10vw]">UPDATE</p>
                   </div>
                

                </div>
                <div className="relative md:hidden">
                    {/*Had to lower the width to 92 as the overflow scroll was out of bound*/}
                    <div className="h-[66.5vw] mt-[11vw] flex w-[92vw]  absolute ">
                        {/*In a real development, ul+li probably wouldn't be used*/}
                      <ul className="h-[66vw]  overflow-y-auto  w-[96vw] absolute z-10">
                        <li className="h-[20vw] pt-[2.2vw]  text-yellow-500">
                        <div className=" h-[8vw] absolute w-[39vw] bg-red-600  -skew-x-[40deg] text-white"></div>
                            <div className=" h-[8vw] absolute w-[39vw]  text-white">
                            <p className=" ml-[3vw] skew-x-[0deg] text-[6vw]">2022/11/29</p>
                            </div>
                            <div className="border-b-2  pb-[2.2vw] border-[#323232] mt-[10vw] ml-[3vw] absolute w-[85vw] text-white">
                            <a href="/"><u>Release 12th volume of “Developer’s Backyard”</u> </a>
                            </div>
                        </li>
                        <li className="h-[20vw] ">
                        <div className=" bg-red-600 h-[8vw] absolute w-[39vw] -skew-x-[40deg] text-white"></div>
                            <div className=" h-[8vw] absolute w-[39vw]  text-white">
                            <p className=" ml-[3vw] skew-x-[0deg] text-[6vw]">2022/11/29</p>
                            </div>
                            <div className="border-b-2  pb-[2.2vw] border-[#323232] mt-[10vw] ml-[3vw] absolute w-[85vw] text-white">
                            <a href="/"><u>Release 12th volume of “Developer’s Backyard”</u> </a>
                            </div>
                        </li>
                        <li className="h-[20vw] ">
                        <div className=" h-[8vw] absolute w-[39vw]  bg-red-600 -skew-x-[40deg] text-white"></div>
                            <div className=" h-[8vw] absolute w-[39vw]  text-white">
                            <p className=" ml-[3vw] skew-x-[0deg] text-[6vw]">2022/11/29</p>
                            </div>
                            <div className="border-b-2  pb-[2.2vw] border-[#323232] mt-[10vw] ml-[3vw] absolute w-[85vw] text-white">
                            <a href="/"><u>Release 12th volume of “Developer’s Backyard”</u> </a>
                            </div>
                        </li>
                        <li className="h-[20vw] ">
                        <div className=" h-[8vw] absolute w-[39vw] bg-red-600  -skew-x-[40deg] text-white"></div>
                            <div className=" h-[8vw] absolute w-[39vw]  text-white">
                            <p className=" ml-[3vw] skew-x-[0deg] text-[6vw]">2022/11/29</p>
                            </div>
                            <div className="border-b-2  pb-[2.2vw] border-[#323232] mt-[10vw] ml-[3vw] absolute w-[85vw] text-white">
                            <a href="/"><u>Release 12th volume of “Developer’s Backyard”</u> </a>
                            </div>
                        </li>
                        <li className="h-[20vw] ">
                        <div className=" h-[8vw]  absolute w-[39vw] bg-red-600   -skew-x-[40deg] text-white"></div>
                            <div className=" h-[8vw] absolute w-[39vw]  text-white">
                            <p className=" ml-[3vw] skew-x-[0deg] text-[6vw]">2022/11/29</p>
                            </div>
                            <div className="border-b-2  pb-[2.2vw] border-[#323232] mt-[10vw] ml-[3vw] absolute w-[85vw] text-white">
                            <a href="/"><u>Release 12th volume of “Developer’s Backyard”</u> </a>
                            </div>
                        </li>
                      </ul>
                    </div>
                    <img className="relative" src="https://www.guiltygear.com/ggst/en/wordpress/wp-content/themes/ggst/img/top/bg_update@sp.png" alt=""/>
                
                </div>
    </div>

    )

}
export default NavBar;