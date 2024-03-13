
function Button(){
    let count = 0;
    const handleclick = () => console.log("ouch");
    const handleclick2 = (name) => {
        count++;
        if(count < 5) console.log(`${name} you have clicked me ${count} times`);
        else console.log(`${name} You can stop clicking me now`);
    }
    const handleclick3 = (e) => e.target.textContent = "ouch";
    return(<button onDoubleClick={(e) => handleclick3(e)}>click me</button>);
}

export default Button;