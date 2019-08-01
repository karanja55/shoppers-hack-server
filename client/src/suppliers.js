
import react from "react";
import suppliers from "./supplier";

 class supplier extends React.Component {
 constructor(props) {
     super(props);
     this.state = {
           supplier: [
            {
                supplier_id: 'trap',
              supplier_name: 'eugene',
             Image: 'jpeg5',
               price: 5600,
                  phone_no: 56542

              },
              {
                supplier_id: 'trap',
                supplier_name: 'bob',
                Image: 'jpeg5',
                price: 5600,
                phone_no: 56542
              },
            
          

           ]
     };
  }
  suppliers: [],
               loading: false,
               error: false,
            };
        }
  
      componentDidMount() {
          this.supplier();
      }
  
       fetchsupplier() {
           this.setState({ loading: true, error: false });
  
           axios
               .get("http://localhost:9000/api/supplier")
               .then(response => {
                   this.setState({
                       supplier: response.data,
                       loading: false,
                       error: false
                   });
               })
               .catch(error => {
                   this.setState({
                     supplier: [],
                      loading: false,
                       error: true
                   });
              });
      }


  render() {

      const { suppliers} = this.state;

      return (
          <div className="mvls-container">
              <div className="mvls-suppliers">
                  {suppliers.map(m => (
                      <supplier key={m.id} supplier={m} />
                  ))}
              </div>
          </div>
      );
  }
 }

export default suppliers;