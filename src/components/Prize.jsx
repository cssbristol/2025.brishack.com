import '../css/Prize.css'

function Prize(){
    return(
        <div className="prize-container" id="prize">
            <table className="prize-table">
                <caption className="prize-heading">Categories & Prize</caption>
                <tr>
                    <td>IoT Solution</td>
                    <td>£ 300</td>
                </tr>
                <tr>
                    <td>Machine Learning (ML)</td>
                    <td>£ 300</td>
                </tr>
                <tr>
                    <td>Electronics for Embedded System</td>
                    <td>£ 300</td>
                </tr>
                <tr>
                    <td>Software Integration</td>
                    <td>£ 300</td>
                </tr>
                <tr>
                    <td>Most Impressive Technical Blockchain Project</td>
                    <td>£ 300</td>
                </tr>
                <tr>
                    <td>Most Impressive Real World Application (Blockchain)</td>
                    <td>£ 300</td>
                </tr>
                <tr>
                    <td>Most Creative</td>
                    <td>£ 200</td>
                </tr>
                <tr>
                    <td>People's Choice</td>
                    <td>Round of Applause </td>
                </tr>
            </table>
        </div>
    )
}

export default Prize