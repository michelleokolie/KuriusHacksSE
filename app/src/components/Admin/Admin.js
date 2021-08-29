const Admin = () => {
    let checkboxes = document.querySelectorAll(".selectButton");
    
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked === true) {
            checkbox.parentNode.background = "red";
        }
    })
    
    
    return (
        <div>
            <h1 className="adminHeader">
                LOI Reviewers
            </h1>
            <table>
                <thead>
                    <th>.</th>
                    <th>Reviewer</th>
                    <th>Type of Research Expertise</th>
                    <th>Gender</th>
                    <th>Area of Research</th>
                    <th>Knowledge</th>
                    <th>Total</th>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="checkbox" className="selectButton"></input></td>
                        <td>S</td>
                        <td><span className="adminSpecialButton">Clinical</span></td>
                        <td>F</td>
                        <td>Neurodegenerative Disorders and Injury</td>
                        <td>Lorem ipsum dolor sit amet</td>
                        <td>Lorem, ipsum</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" className="selectButton"></input></td>
                        <td>S</td>
                        <td><span className="adminSpecialButton">Clinical</span></td>
                        <td>F</td>
                        <td>Neurodegenerative Disorders and Injury</td>
                        <td>Lorem ipsum dolor sit amet</td>
                        <td>Lorem, ipsum</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" className="selectButton"></input></td>
                        <td>S</td>
                        <td><span className="adminSpecialButton">Clinical</span></td>
                        <td>M</td>
                        <td>Neurodegenerative Disorders and Injury</td>
                        <td>Lorem ipsum dolor sit amet</td>
                        <td>Lorem, ipsum</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" className="selectButton"></input></td>
                        <td>S</td>
                        <td><span className="adminSpecialButton">Clinical</span></td>
                        <td>M</td>
                        <td>Neurodegenerative Disorders and Injury</td>
                        <td>Lorem ipsum dolor sit amet</td>
                        <td>Lorem, ipsum</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" className="selectButton"></input></td>
                        <td>S</td>
                        <td><span className="adminSpecialButton">Clinical</span></td>
                        <td>F</td>
                        <td>Neurodegenerative Disorders and Injury</td>
                        <td>Lorem ipsum dolor sit amet</td>
                        <td>Lorem, ipsum</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Admin
