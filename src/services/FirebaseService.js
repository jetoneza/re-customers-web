import CONFIG from 'constants/config';

class FirebaseService {
  constructor() {
    if(!FirebaseService.instance){
      this.initialized = false;
      this.db = null;

      FirebaseService.instance = this;
    }

    return FirebaseService.instance;
  }

  validate() {
    if (!this.initialized) {
      return false;
    }

    return true;
  }

  init() {
    if (window.firebase && !this.initialized) {
      window.firebase.initializeApp(CONFIG.firebase);

      this.db = window.firebase.firestore();
      this.initialized = true;
    }
  }


  addToCollection(table, data) {
    if (!this.validate()) {
      return;
    }

    // TODO: Improve validations
    if (!table) {
      return;
    }

    if (!data) {
      return;
    }

    return this.db.collection(table).add(data);
  }

  async getCollection(table) {
    // TODO: Improve validations
    if (!table) {
      return;
    }

    const querySnapshot = await this.db.collection(table).get()

    const data = [];

    querySnapshot.forEach((doc) => {
      data.push({
        id: doc.id,
        ...doc.data()
      });
    });

    return data;
  }
}

export default new FirebaseService();
