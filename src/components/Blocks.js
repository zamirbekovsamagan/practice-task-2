import './Blocks.css'

function Blocks ({block}){
    let classes;
    if(block === 'yellow'){
        classes = 'yellow'
    }else if(block === 'green'){
        classes = 'green'
    }else if(block ==='color'){
        classes = 'lime'
    }else if(!isNaN(block)){
        classes = 'red'
    }
    return(
        <div className={classes}></div>
    )
}

export default Blocks