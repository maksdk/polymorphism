import FakeSubscription from './fakeSubscription';

class User {
   constructor(email, currentSubscription = null) {
      this.email = email;
      this.currentSubscription = currentSubscription || new FakeSubscription(this);
   }

   getCurrentSubscription() {
      return this.currentSubscription;
   }

   isAdmin() {
      return this.email === 'admin@admin.com';
   }
}

export default User;