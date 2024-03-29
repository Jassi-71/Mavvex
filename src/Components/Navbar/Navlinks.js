import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { links } from './Mylinks';

const Navlinks = () => {
    const [heading,setHeading]=useState('')
    return(
        <>
            {
                links.map((link)=>(
                    <div>
                        <div className='px-3 text-left md:cursor-pointer group'>
                            <h1 className='text-[17px] font-semibold py-7 flex justify-between items-center md:pr-0 pr-5 group' onClick={()=>heading!==link.name ? setHeading(link.name) : setHeading('')}>
                                {link.name}
                                 
                                 {
                                    link.sublink && <> 
                                    
                                        <span className='text-xl md:hidden inline'>
                                        <ion-icon name={`${heading===link.name ? 'chevron-up' : 'chevron-down'}`} style={{'color':'black'}}>

                                            </ion-icon>
                                        </span>

                                        <span className='text-xl md:mt-0 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2'>
                                            <ion-icon name="chevron-down" style={{'color':'black'}}></ion-icon>
                                        </span>

                                    </>
                                }
                                
                                    
                                
                            
                            </h1>
                            {link.submenu && 
                            <div>
                                <div className='absolute top-16 hidden group-hover:md:block hover:md:block'>
                                    <div className='py-3 '>
                                        <div className='w-4 h-4 left-3 absolute mt-1 bg-white rotate-45 '>

                                        </div>
                                    </div>
                                    <div className='bg-white border-double border-2 border-violet-100 p-3.5 rounded-2xl '>
                                        {
                                            link.sublink.map((slink)=>(
                                                <li className='text-sm text-gray-600 hover:bg-hover rounded-lg m-2'>
                                                    <Link to={slink.link}>
                                                        <div className='flex items-center mx-5'>
                                                            <span className='text-2xl mx-3 my-1'>
                                                                {slink.icon}
                                                            </span>
                                                            {slink.name}
                                                        </div>
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>}
                        </div>

                        {/*Mobile Menus*/}

                        <div className={`${heading===link.name  ? 'md:hidden' : 'hidden'}`}>
                            {
                                link.sublink && link.sublink.map((slink)=>(
                                    <div >
                                        <li className="py-3 pl-14  hover:bg-hover rounded-lg">
                                            <Link to={slink.link}>
                                                        <div className='flex items-center mx-5'>
                                                            <span className='text-2xl mx-3 my-1'>
                                                                {slink.icon}
                                                            </span>
                                                            {slink.name}
                                                        </div>
                                            </Link>
                                        </li>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Navlinks
