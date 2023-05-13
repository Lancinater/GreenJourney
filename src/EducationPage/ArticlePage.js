import { useParams, Link } from 'react-router-dom';
import React, { useState } from "react";
import what_article from './what_article.jpg';
import './articlepage.css';
import how_art from './how-art.jpg';
import bene_art from './bene-art.jpg';

function ArticlePage() {
  const { id } = useParams(); // get the id parameter from the URL
  const [isExpanded, setIsExpanded] = useState(false);

  function toggleExpanded() {
    setIsExpanded(!isExpanded);
  }


  // use the id to display the appropriate article
  let title, coverImage, content;
  if (id === 'a1') {
    title = 'What is carbon emissions?';
    coverImage = what_article;
    content = 'Greenhouse gases are gases that traps heat in the earth’s atmosphere. The sun shines through the atmosphere and creates heat onto the surface of the earth. When the night hits, when the surface cools down and releases the heat back into the atmosphere, some of the heat will be trapped by the greenhouse gases in the atmosphere which maintains the earth temperature at a normal temperature. But ever since the industrial revolution, we humans have been releasing large amounts of greenhouse gases from different sources such as energy production, transportation, agriculture and many more. From the accelerated boosting of the production of the greenhouse gases, it causes the atmosphere to be able to trap more heat into it and make the planet to be hotter. The types of greenhouse gases includes firstly the carbon dioxide where it is released everything from natural processes to burning fossil fuels and deforestation. The second gas is called methane which is produced through decomposition such as waste dumps, production of oil and gas, farms and many more. The third gas is called nitrous oxide which is produced from fertilisers, biomass burning, fossil fuel combustion. The last gas is called fluorinated gas which includes hydrofluorocarbons, perfluorocarbons and sulphur hexafluoride. These gases are man-made during the industrial processes. Although they are in very small concentrations in our atmosphere, they are able to trap heat very effectively. One of the gases, sulphur hexafluoride, is created from high-voltage electricity equipment. These greenhouse gases can be reduced if firstly the energy source people are using currently are renewable energy instead of non-renewable energy. The other ways they can reduce is by switching to electric vehicles, reusing and recycling items and many more. ';
  } else if (id === 'a2') {
    title = 'How is it affect us?';
    coverImage = how_art;
    content = `Greenhouse gases can affect our lives in many ways. It is not just an increase in temperature in the atmosphere, it can affect the sea level, change in weather patterns and many more. Firstly, it will affect our change in climate by maintaining the heat from the morning in the atmosphere. This will cause the temperature to rise in the atmosphere causing the sea level to rise from the melting of glaciers and sea ice from the arctic. By increasing the sea level, flood will also become an increasing issue to people in some places. On the other hand, some of the countries will also have drought more common in places where water supplies are already dwindling because of the hot climate caused by the greenhouse gases. There will also be less snow overall because of the warm atmosphere.\n\n
    From the change in weather patterns and the change in temperature, some of the changes are difficult to manage for the agricultural farmers as they need to find a way where they can handle all of these situations caused by the weather and temperature to be able to produce food for the people. The farmers’s health will also be affected due to the change in weather and climate patterns as this could affect their health and lives directly and indirectly. By having more dry conditions, it will lead to wildfires and bring more harm to the people. When the ocean temperature rises due to the atmosphere, hurricanes will be stronger. Flooding will also be more common due to the climate change and many unknown diseases can be spread in the water, injuries will also be made that is caused by flooding and lastly chemical hazards can be spread in the water. People will also have more common heat strokes as the temperature in the atmosphere increases.\n\n
    
    The environment will also change due to climate change. The arctic is affected the most due to the change in temperature causing the ice to melt destroying some ecosystems there. Changes can also happen in the ocean as the carbon dioxide released in the atmosphere can cause the water to become acidic which can affect the marine life in it. Warming waters, rising sea level and hurricanes can also destroy coral reefs habitats. Flooding and drought can also destroy some of the ecosystems on lands too. The physical infrastructure will also be affected where extreme weather events such as heavy rains and floods can damage some structures and facilities. Floods can also cause the close down of certain roads as vehicles are not safe to drive on it.`;
  } else if (id === 'a3') {
    title = 'What is the influence?';
    coverImage = bene_art;
    content = `There are a ton of benefits of reducing carbon emissions. The first benefit is that it's good for the environment. By reducing carbon emissions, it can help reduce floods, wildfire and many more. It will also improve the air quality in the atmosphere where there’s less carbon dioxide in the air, it will improve the health of everyone. By reducing carbon emissions, it will also help protect the ecosystems of some animal’s habitats due to the reduction of floods and droughts from the reduction of carbon emissions. By reducing carbon emissions, the farmers will also be able to keep producing food without having to worry about the weather patterns and the change in climate and temperature. The sea levels will also stop increasing, reducing the chance for some areas to flood and destroy buildings. By decreasing the chances to flood, the buildings and roads won’t be damaged and will be more convenient to the people. 

    Another benefit in reducing carbon emissions in a person's perspective is that firstly, it will save them money as they won’t need to pump petrol to drive a car to go somewhere near when they can walk there or cycle there. The second benefit is that they will also be healthier because of the air quality improvement from the reduction of carbon emissions. The people won’t get sick easily because of the reduction of air pollution. `;
  }
  
  return (
    <div className="article-page-container">
      <h1 className='hiarticletitle'>{title}</h1>
      <img src={coverImage} alt={title} className="article-cover-image" />
      <p className='content-show'>{isExpanded ? content : content.slice(0, 500) + "..."}</p>
      <button className='abutton-forarticle' onClick={toggleExpanded}>{isExpanded ? "Back" : "Read More"}</button>
      <br></br>
      <a href='/education' className="article-page-link">Go back to Education Home Page</a>
    </div>
  );
}

export default ArticlePage;
