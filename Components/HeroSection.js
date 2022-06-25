import React from 'react'
import Image  from "next/image";


export function HeroSection() {
    return (
        <section className='container my-5 py-4'>
            <div className='row'>
                <div className='col-xs-12 col-md-8 col-lg-6'>
                    <h2 className=' font-weight-bold text-secondary'> Experiencing The World From Behind A 
                    Screen And Saving Rememberable Moments</h2>

                    <h5 className='py-4 '>Even if you are not traveling, you need to step out of your comfort zone.
                      Be it taking on a new project, opening a business, or enrolling in a course. When you do something
                       that scares you a little, you can do something great</h5>
                </div>
                <div className='col-xs-12 col-md-8 col-lg-6'>
                    <Image src='/img/travel.png' alt='' className='img-fluid' height="300em" width='300em' />
                </div>
            </div>
        </section>
    )
}
