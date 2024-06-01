import React from 'react';
import './Resources.css';

const RenewableEnergyCard = ({ title, description, image }) => {
  return (
    <div className="renewable-energy-card">
      <img src={image} alt={title} className="renewable-energy-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="learn-more-button">Learn More</button>
    </div>
  );
}

const RenewableEnergySection = () => {
  const renewableEnergyData = [
    {
      title: 'Solar Energy',
      description: 'Solar power harnesses energy from the sun through photovoltaic panels or solar thermal systems. It\'s abundant, clean, and increasingly cost-effective.',
      image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Wind Energy',
      description: 'Wind turbines capture the kinetic energy of the wind and convert it into electricity. Wind power is scalable and has a relatively low environmental impact.',
      image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Rain Water Harvesting',
      description: 'Rainwater harvesting (RWH) is the collection and storage of rain, rather than allowing it to run off. Rainwater is collected from a roof like surface and redirected to a tank, cistern, deep pit (well, shaft, or borehole), aquifer, or a reservoir with percolation, so that it seeps down and restores the ground water.',
      image: 'data:image/jpeg;base64,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'
    },
    {
      title: 'Bio Gas Plant',
      description: `Biogas a renewable fuel that's produced when organic matter, such as food or animal waste, is broken down by microorganisms in the absence of oxygen. This process is called anaerobic digestion. For this to take place, the waste material needs to be enclosed in an environment where there is no oxygen.`,
      image: 'data:image/jpeg;base64,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'
    },
    {
      title: 'Hydropower',
      description: 'Hydroelectric power generates electricity by harnessing the energy of flowing water. It\'s a mature technology and provides a consistent source of renewable energy.',
      image: 'https://images.pexels.com/photos/6130818/pexels-photo-6130818.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Biomass',
      description: 'Biomass energy is derived from organic materials such as wood, agricultural residues, and waste. It can be used for heating, electricity generation, and transportation fuels.',
      image: 'https://images.pexels.com/photos/18485510/pexels-photo-18485510/free-photo-of-a-typewriter-with-the-words-green-tech-on-it.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Geothermal Energy',
      description: 'Geothermal power taps into heat from beneath the Earth\'s surface. It can be used for electricity generation, heating, and cooling.',
      image: 'https://images.pexels.com/photos/4558356/pexels-photo-4558356.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
  ];

  return (
    <div className="renewable-energy-section">
      <h2>Types of Renewable Energy</h2>
      <div className="renewable-energy-card-container">
        {renewableEnergyData.map((data, index) => (
          <RenewableEnergyCard key={index} title={data.title} description={data.description} image={data.image} />
        ))}
      </div>
    </div>
  );
}
export default RenewableEnergySection;
