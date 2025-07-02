import React from "react";
import { useNavigate } from "react-router-dom";
import "./MainEvents.css";

const categories = [
  {
    name: "Music",
    category: "music",
    image:
      "https://img.freepik.com/premium-photo/concert-stage-rock-festival-music-instruments-background-with-copy-space-generated-by-ai_986584-4293.jpg",
  },
  {
    name: "Wedding",
    category: "wedding",
    image:
      "https://shaadiwish.com/blog/wp-content/uploads/2020/10/mangalsutra-for-south-indian-brides.jpg",
  },
  {
    name: "Dance",
    category: "dance",
    image:
      "https://th.bing.com/th/id/R.458ca51416bd56531a0f36d66d65abac?rik=MokU3nRlzsblcw&riu=http%3a%2f%2fbudhshiv.com%2fcdn%2fshop%2fproducts%2fhandcrafted-fine-brass-nataraja-statue-205-heightbsn08-500236.jpg%3fv%3d1707025695&ehk=C7l0JiKlcOiZYJ2TwvjZHQJ8rQw1oB1w7DLk7l5W6dk%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    name: "Birthday",
    category: "birthday",
    image:
      "https://stayathomemum.com.au/wp-content/uploads/2016/08/birthday-party.jpg",
  },
  {
    name: "Education",
    category: "education",
    image:
      "https://th.bing.com/th/id/OIP.Iv2OI4GwgMkMftYUl4dNoQHaE8?w=1200&h=800&rs=1&pid=ImgDetMain&cb=idpwebpc2",
  },
  {
    name: "Fashion Show",
    category: "fashion",
    image:
      "https://i.pinimg.com/originals/f5/50/88/f55088b8f2db819b968a7e7dc641e97f.jpg",
  },
  {
    name: "Sports Tournaments",
    category: "sports",
    image:
      "https://img.freepik.com/premium-photo/collage-several-athletes-playing-different-sports_978521-37160.jpg",
  },
  {
    name: "Food Festivals",
    category: "food",
    image:
      "https://i.pinimg.com/736x/a8/8f/19/a88f19b2b56dad869d23958232a5ee83.jpg",
  },
  {
    name: "Charity Events",
    category: "charity",
    image:
      "https://www.rentecdirect.com/blog/wp-content/uploads/2016/12/bigstock-Happy-volunteer-family-holding-85091345.jpg",
  },
  {
    name: "Festivals",
    category: "festivals",
    image:
      "https://2.bp.blogspot.com/-o4mf1EOmuRw/VvyOqPCxGuI/AAAAAAAAA-M/eeiUXiulboM53mHbfUsn6Xl9kFkaoMQ3g/s320/festivals-of-india.jpg",
  },
];

const MainEvents = () => {
  const navigate = useNavigate();

  return (
    <div className="main-container-2" style={{ marginTop: "80px" }}>
      <div className="container mt-4">
        <h1 className="text-center mb-4" style={{ backgroundColor: "black" }}>
          Choose Your Event Type
        </h1>
        <div className="row">
          {categories.map((cat) => (
            <div className="col-md-4 mb-4" key={cat.name}>
              <div
                className="card h-100 cursor-pointer"
                style={{
                  cursor: "pointer",
                  backgroundColor: "transparent",
                  color: "white",
                  border: "4px dotted #80644a",
                }}
                onClick={() => navigate(`/events/${cat.category}`)}
              >
                <img
                  src={cat.image}
                  className="card-img-top"
                  alt={cat.name}
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className="card-body text-center">
                  <h2 className="card-title">{cat.name}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainEvents;
