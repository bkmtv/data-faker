import { faker } from "@faker-js/faker";

function Users() {

    faker.setLocale("ru");
    const uuid = faker.datatype.uuid();
    const fullName = faker.name.fullName();
    const address = faker.address.streetAddress(true);
    const phone = faker.phone.number();
    const image = faker.image.avatar();

  return (
    <div>
      <p>{uuid}</p>
      <p>{fullName}</p>
      <p>{address}</p>
      <p>{phone}</p>
      <img src={image} alt={image}/>
    </div>
  )
}

export default Users;