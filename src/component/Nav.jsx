import React from 'react'



const Nav = () => {
    let Links = [
        {name:"Home",link:'/'},
        {name:"About us",link:'/about'},
        {name:"Products",link:'/products'},
        {name:"Contact",link:'/contact'},
        {name:"Service",link:'/'},
        {name:"Customer Review",link:'/'},
    ];
  return (
    <div className='shadow-md w-full top-0 left-0 '>
        <div className='md:flex items-center justify-between  bg-[#ebecf0] py-4 md:px-10 px-7'>
            <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
                <span className='text-3xl text-indigo-600 mr-1 pt-2'>
                <ion-icon name="logo-ionic"></ion-icon>
                </span>
                Soap
            </div>
            <ul className='md:flex md:items-center'>
                {
                    Links.map((link)=>(
                        <li key={link.name} className='md:ml-8 text-xl'>
                            <a href={link.link} className='text-gray-800 hover:text-gray-400 duration:500'>{link.name}</a>
                        </li>
                    ))
                }
            </ul>

        </div>

    </div>
  )
}

export default Nav