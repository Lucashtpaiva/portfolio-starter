import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const services = [
  {
    name:'Desenvolvedor',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.',
    link: 'Ler mais'
  },
  {
    name:'Desenvolvedor',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.',
    link: 'Ler mais'
  },
];

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div>
          <div>
            <h2 className='h2 text-accent mb-6'>Quem sou eu</h2>
            <h3 className='h3 max-w-[455px] mb-16'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h3>
            <button className='btn btn-sm'>Veja meus trabalhos</button>
          </div>
          <div>services</div>
        </div>
      </div>
    </section>
  );
};

export default Services;
