import Offer from "../components/Offer";

const Homestays = () => {
  return (
    <div>
      <div className="bg-white shadow-lg m-8 rounded-md">
        <div className="grid grid-cols-3">
          <div className="m-4">
            <div className="flex items-center gap-2">
              <img
                src="https://promos.makemytrip.com/store/GoaDT.JPG"
                alt=""
                className="h-[50px] w-[50px] rounded-full"
              />
              <div>
                <p className="font-semibold text-xl">Goa</p>
                <p className="text-sm">Homestays - Villas & Apts</p>
              </div>
            </div>
          </div>

          <div className="m-4">
            <div className="flex items-center gap-2">
              <img
                src="https://promos.makemytrip.com/store/DelhiDT.JPG"
                alt=""
                className="h-[50px] w-[50px] rounded-full"
              />
              <div>
                <p className="font-semibold text-xl">Delhi</p>
                <p className="text-sm">Homestays - Villas & Apts</p>
              </div>
            </div>
          </div>

          <div className="m-4">
            <div className="flex items-center gap-2">
              <img
                src="https://promos.makemytrip.com/store/MumbaiDT.JPG"
                alt=""
                className="h-[50px] w-[50px] rounded-full"
              />
              <div>
                <p className="font-semibold text-xl">Mumbai</p>
                <p className="text-sm">Homestays - Villas & Apts</p>
              </div>
            </div>
          </div>

          <div className="m-4">
            <div className="flex items-center gap-2">
              <img
                src="https://promos.makemytrip.com/altaccoimages/aa_collections_img/mukhteshwar.jpg"
                alt=""
                className="h-[50px] w-[50px] rounded-full"
              />
              <div>
                <p className="font-semibold text-xl">Mukteshwar</p>
                <p className="text-sm">Homestays - Villas & Apts</p>
              </div>
            </div>
          </div>

          <div className="m-4">
            <div className="flex items-center gap-2">
              <img
                src="https://promos.makemytrip.com/altaccoimages/aa_collections_img/gokarna.jpg"
                alt=""
                className="h-[50px] w-[50px] rounded-full"
              />
              <div>
                <p className="font-semibold text-xl">Gokarna</p>
                <p className="text-sm">Homestays - Villas & Apts</p>
              </div>
            </div>
          </div>

          <div className="m-4">
            <div className="flex items-center gap-2">
              <img
                src="https://promos.makemytrip.com/altaccoimages/aa_collections_img/conoor.jpg"
                alt=""
                className="h-[50px] w-[50px] rounded-full"
              />
              <div>
                <p className="font-semibold text-xl">Coonoor</p>
                <p className="text-sm">Homestays - Villas & Apts</p>
              </div>
            </div>
          </div>

          <div className="m-4">
            <div className="flex items-center gap-2">
              <img
                src="https://promos.makemytrip.com/altaccoimages/aa_collections_img/kasol.jpg"
                alt=""
                className="h-[50px] w-[50px] rounded-full"
              />
              <div>
                <p className="font-semibold text-xl">Kasol</p>
                <p className="text-sm">Homestays - Villas & Apts</p>
              </div>
            </div>
          </div>

          <div className="m-4">
            <div className="flex items-center gap-2">
              <img
                src="https://promos.makemytrip.com/altaccoimages/aa_collections_img/malvan.jpg"
                alt=""
                className="h-[50px] w-[50px] rounded-full"
              />
              <div>
                <p className="font-semibold text-xl">Malvan</p>
                <p className="text-sm">Homestays - Villas & Apts</p>
              </div>
            </div>
          </div>

          <div className="m-4">
            <div className="flex items-center gap-2">
              <img
                src="https://promos.makemytrip.com/altaccoimages/aa_collections_img/jibhi.jpg"
                alt=""
                className="h-[50px] w-[50px] rounded-full"
              />
              <div>
                <p className="font-semibold text-xl">Jibhi</p>
                <p className="text-sm">Homestays - Villas & Apts</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-8">
        <Offer />
      </div>
    </div>
  );
};

export default Homestays;
