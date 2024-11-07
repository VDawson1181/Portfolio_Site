import React, {useState} from 'react';
import './PkgBlog.css'

const PkgBlog = ({id, items, markup}) => {
const blogId = id;
const blogList = items;
const blogMarkup = markup;

const [toggle, setToggle] = useState(false);

const toggleShowStatus = () => {
    setToggle(!toggle);
}

    
    const blogs = blogList.map((item, index) => <div id={blogId} key={blogId} className={item.isValid ? "PkgBlogMain":"PkgBlogHidden"}>
        <h2 className='clicker' onClick={toggleShowStatus}>{item.title}</h2>
        <div className={toggle ? "PkgBlogInner pkgOpen": "PkgBlogInner pkgClosed"}>
            <div className="PkgBlog_Markup">
                    <div dangerouslySetInnerHTML={blogMarkup} />
            </div> 
        </div>
    </div>
    );


    
  return (<>
  {blogs} 
  </>

  )
}

export default PkgBlog