import PropTypes from 'prop-types';

function Button(props){

    const handleClick = (e, name, indexNo, url) => {
        e.preventDefault();
        // e.target.textContent = "Clicked!";
        // e.target.style.opacity = "0.5";
        // e.target.style.cursor = "default";
        // e.target.disabled = true;

        console.log(`${name}'s button (#${indexNo}) was clicked -- redirecting to ${url}`);
        window.open(url);
        window.focus();
    }
    // const handleClick2 = (name) => console.log(`${name} stop clicking me!`);

    return(
        <button className="button" onClick={(e) => handleClick(e,props.name, props.indexNo, props.url)}>Try Me</button>
        // <button className="button" onClick={() => handleClick2(props.name)}>Click Me</button>
    );
}

export default Button;