import React , { useEffect , useState } from 'react'
import './Projects.scss'

import projectApi , { Category } from './ProjectsApi'
import ProjectCard from './ProjectCard';

const Projects = () => {
  // collect the api into an obj
  const [Projects, setProjects] = useState([]) ;
  // Set an active filter to choose div color
  const [ActiveFilter, setActiveFilter] = useState('all') ;

  // Sort the categories into an array, which will be used to create buttons
  // const [Categories, setCategories] = useState([...Category]) ;

  // set limit for showing projects
  const [Limit, setLimit] = useState(5)

  const changeProjects = (cat) => {
    setLimit(5) ;
    setActiveFilter(cat) ;
    if (cat==="all"){
      setProjects([...projectApi]) ;
      return;
    }
    let arr = projectApi.filter((proj) => (
      proj.category === cat
    ))
    setProjects([...arr]) ;
  }

  useEffect(() => {
    changeProjects('all') ;
  }, [])
  
  
  return (
    <div id="projects">
      <h1>Projects</h1>
      {/*     Button List      */}
      <div className="project-buttons">
        {Category.map((cat,ind)=>(
          <div className={ActiveFilter === cat ? "click-color":"" } key={`projb${ind}`} onClick={ () => changeProjects(cat)}> {cat} </div>
        ))}
      </div>

      {/*     Project Cards    */}
      <div className="project-cards">
      {/* eslint-disable-next-line */}
        {Projects.map((proj,ind) => {
          if (ind<Limit){
            return <ProjectCard key={`proj-${ind}`} proj={proj} />
          }
        })}
      </div>

      <p className={Limit>=Projects.length? "hide load":"load"} onClick={()=> setLimit(Limit+5)}>Click to see more projects</p>

    </div>
  )
}

export default Projects