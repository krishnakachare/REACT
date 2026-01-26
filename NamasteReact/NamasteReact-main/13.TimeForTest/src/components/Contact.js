const Contact = () => {
  return (
    <div>
      <h1 className="p-4 m-4 font-bold text-3xl">Contact Page</h1>
      <form>
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="Name"
        ></input>
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="Message"
        ></input>
        <button className="border-black p-2 m-2 bg-gray-100 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
