import '../css/Prizes.css'

function Prizes(){
    return(
        <div className="prize-container" id="prizes">
            <table className="prize-table">
                <caption className="prize-heading">Categories & Prizes</caption>
                <tr>
                    <td className="category-row">IoT Solution</td>
                    <td className="prize-row">£ 300</td>
                </tr>
                <tr>
                    <td className="category-row">Machine Learning (ML)</td>
                    <td className="prize-row">£ 300</td>
                </tr>
                <tr>
                    <td className="category-row">Electronics for Embedded System</td>
                    <td className="prize-row">£ 300</td>
                </tr>
                <tr>
                    <td className="category-row">Software Integration</td>
                    <td className="prize-row">£ 300</td>
                </tr>
                <tr>
                    <td className="category-row">Most Impressive Technical Blockchain Project</td>
                    <td className="prize-row">£ 300</td>
                </tr>
                <tr>
                    <td className="category-row">Most Impressive Real World Blockchain Application</td>
                    <td className="prize-row">£ 300</td>
                </tr>
                <tr>
                    <td className="category-row">Green Design</td>
                    <td className="prize-row">£ 300</td>
                </tr>
                <tr>
                    <td className="category-row">Most Creative</td>
                    <td className="prize-row">£ 200</td>
                </tr>
                <tr>
                    <td className="category-row">Best UI 1st Place</td>
                    <td className="prize-row">Special Prize from Roku</td>
                </tr>
                <tr>
                    <td className="category-row">Best UI 2nd Place</td>
                    <td className="prize-row">Special Prize from Roku</td>
                </tr>
                <tr>
                    <td className="category-row">People's Choice</td>
                    <td className="prize-row">Round of Applause </td>
                </tr>
            </table>
        </div>
    )
}

export default Prizes