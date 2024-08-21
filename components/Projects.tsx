import  {projects} from '@/data'
import React from 'react'
import { PinContainer } from './ui/3DPin'
import { FaLocationArrow } from 'react-icons/fa6'

const Projects = () => {
  return (
    <div className='py-20' id="projects">
        <h1 className='heading'>
            A Small Selection of{' '}
            <span className='text-purple '>Recent Projects</span>
        </h1>
        {/* <div className="flex flex-wrap items-center justify-center p-4 gap-y-6 gap-x-24 mt-10">
            {projects.map(({id,title,des,img,iconLists,link})=>(
                <div key={id} className="  sm:h-[41rem] h-[32rem] lg:min-h-[32.5] flex items-center justify-center  w-[80vw]">
                    <PinContainer title={link} href={link} >
                        <div className='relative flex items-center justify-center lg:w-[50vw] sm:w-[70px] w-[70vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10'>
                            <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                                <img src='/bg.png' alt='bg-img'></img>
                            </div>
                            <img src={img} alt={title} className='z-10 absolute bottom-0'/>
                        </div>
                        <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>{title}</h1>  
                
                         <p className='lg:text-[0.8rem] lg:font-normal font-light text-sm line-clamp-2'>{des}</p>
                         <div className='flex items-center justify-between mt-7 mb-3 '>
                            <div className='flex items-center'>
                                {iconLists.map((item, index)=>(
                                    <div key={item} className=' flex  items-center justify-between rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8' style={{transform:`translateX(-${5*index*2}px)`}}>
                                        <img src={item} alt={item} className='p-2' />
                                    </div>
                                ))}
                            </div>
                            <div className='flex items-center justify-center'>
                                <p className='flex lg:text-xl md:text-xs text-sm text-purple'>Check live site</p>
                                <FaLocationArrow className='ms-3' color='#CBACF9'/>
                            </div>
                        </div>
                    </PinContainer>
                </div>
            )    
            )}
        </div> */}


<div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
{projects.map(({id,title,des,img,iconLists,link})=>(
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={id}
          >
            <PinContainer
              title={link}
              href={link}
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-xl md:text-xl lg:mb-1 text-base line-clamp-1">
                {title}
              </h1>

              <p
                className="lg:text-sm  font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-9 lg:h-9 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
                </div>
            </PinContainer>
          </div>
        ))}
      </div>




    </div>
  )
}

export default Projects