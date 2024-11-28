import MockAdapter from "axios-mock-adapter";  
import axios from "axios";

const Mock = new MockAdapter(axios);
export default Mock;






// Cette configuration permet de simuler des réponses API
// ce qui est utile pour le développement sans backend fonctionnel ou les tests unitaires

// axios-mock-adapter pour simuler des réponses API sans effectuer de vraies requêtes réseau
// Axios biblio pour effectuer des requêtes HTTP 

