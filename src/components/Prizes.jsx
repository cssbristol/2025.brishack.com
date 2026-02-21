import '../css/Prizes.css'

function Prizes(){
    return(
        <div className="prize-container" id="prizes">
            <table className="prize-table">
                <caption className="prize-heading">Categories</caption>
                <tr>
                    <td className="category-row">Best Software</td>
                </tr>
                <tr>
                    <td className="category-row">Most Creative</td>
                </tr>
                <tr>
                    <td className="category-row">Best Real World Application</td>
                </tr>
                <tr>
                    <td className="category-row">Best Electronics</td>
                </tr>
                <tr>
                    <td className="category-row">Best UI</td>
                </tr>
            </table>
        </div>
    )
}

export default Prizes
