import img from "../../assets/homeImg.jpg";
const BuldingDetails = () => {
  return (
    <div  data-aos="zoom-in" className="max-w-7xl mx-auto w-full bg-gradient-to-r from-black via-gray-800 to-gray-300h -64 rounded-xl p-4 mt-7">
      <h1 className="text-center text-white text-2xl font-semibold mb-4 line-through">
        
        About the building
      </h1>
      <div className="flex flex-col lg:flex-row-reverse justify-around gap-3 lg:space-y-6">
        <img className="w-[400px] rounded" src={img} alt="" />
        <div className="text-slate-300">
          <h1 className="text-slate-300 font-semibold">
            Building Name: <span className="">Skylight Towers</span>
          </h1>
          <h1 className=" font-semibold">
            Address:123 Pine Street, Gulshan , Dhaka
          </h1>
          <h1>
            Building Type: Mixed-Use (Combination of Residential and Commercial
            Spaces)
          </h1>
          <h1>Architectural Style: Contemporary with Glass Facade</h1>
          <ul>
            <h1>Number of Units:</h1>
            <li className="lg:ml-3">
              <span>.</span> Residential Floors (1st to 5th): Each floor has 2
              luxury apartments <br /> (2-bedroom and 3-bedroom options),
              totaling 32 residential units.
            </li>
            <li className="lg:ml-3">
              . Commercial Floor (1st): 5 retail spaces for shops and cafes.
            </li>
          </ul>
          <ul>
            <h1>Security Features:</h1>
            <li className="lg:ml-3">. Keycard Access for Residents</li>
            <li className="lg:ml-3"> . 24/7 Surveillance Cameras</li>
            <li className="lg:ml-3"> . On-site Security Personnel</li>
          </ul>
          <ul>
            <h1>Technology Integration:</h1>
            <li className="lg:ml-3">
              . Smart Home Features for Residential Units (smart thermostats,
              lighting, and security)
            </li>
            <li className="lg:ml-3">
              {" "}
              . Digital Directory for Commercial Spaces
            </li>
            <li className="lg:ml-3"> . On-site Security Personnel</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BuldingDetails;
