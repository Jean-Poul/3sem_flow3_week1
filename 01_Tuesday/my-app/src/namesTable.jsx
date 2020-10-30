//const names = [{'fname':'Anders','lname':'Henriksen'},{'fname':'Britta','lname':'Albertsen'},{'fname':'Kalle','lname':'Fredborg'}];


const MyTable = (props) => {
        return (
<table>
        <tr>
                <th>First name</th>
                <th>Last Name</th>
                </tr>
        {props.names && props.names.map(el => 
                <tr>
                <td>{el.fname}</td>
                <td>{el.lname}</td>
                </tr>
                )
                }
 </table>
 );
        }
        
 export default MyTable;


