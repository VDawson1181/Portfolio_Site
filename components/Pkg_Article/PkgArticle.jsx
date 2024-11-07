
import React, {useState} from 'react';
import './PkgArticle.css'

const PkgArticle = ({id, items, images}) => {
const pkgId = id;
const userList = items;
const imageList = images;

const [toggle, setToggle] = useState(false);

const toggleShowStatus = () => {
    setToggle(!toggle);
}

    const pkgImages = imageList.map( (image, index) => <div key={index}>
                <img className="card-image" src={ image.url } alt="Image" loading="lazy"/>
                <p>{image.blurb}</p>
                </div>);
    
    const packages = userList.map((item, index) => <div id={pkgId} key={pkgId} className={item.isValid ? "pkgArticleMain":"PkgArticleHidden"}>
        <h2 className='clicker' onClick={toggleShowStatus}>{item.title}</h2>
        <div className={toggle ? "pkgArticleInner pkgOpen" : "pkgArticleInner pkgClosed"}>
            <div className="pkgArticle_PackageDescription">
                    <aside>
                        <h1>"{item.title}" - <span>{item.type}</span></h1>
                        <h2>Objective:</h2>
                        <p className='pkgObj'>{item.objective}</p>                
                        <h2>Inspiration:</h2>
                        <p className='pkgInspo'>{item.inspiration}</p>  
                        <p className='pkgResult'>{item.result}</p>              
                    </aside>
            </div>

            <div className="pkgArticle_PackageRundown">
                <ul>
                    <li>
                        {pkgImages}
                    </li>
                </ul>
            </div> 
        </div>
    </div>
    );


    
  return (<>
  {packages} 
  </>

  )
}

export default PkgArticle