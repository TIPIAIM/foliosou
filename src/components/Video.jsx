import React, { useState } from "react";
import ReactPlayer from "react-player";

export default function Video() {
  const [selectedVideo, setSelectedVideo] = useState(
    "https://www.youtube.com/watch?v=Xcea1ZjHLk8&list=PLAEkrmc722rrg3aLy0esmE8ML7CTR-0un"
  );

  // Liste de vidéos
  const videoList = [
    {
      id: 1,
      title: "Espace de travail ReactJS",
      url: "https://www.youtube.com/watch?v=OfgUhqRthZI&list=PLAEkrmc722rrHz1qC4Yro9_u9o9BuCh03&index=2",
    },

    {
      id: 2,
      title: "Espace de travail Node.js",
      url: "https://www.youtube.com/watch?v=kuSngaPYkj0&list=PLAEkrmc722rrHz1qC4Yro9_u9o9BuCh03&index=1",
    },
    {
      id: 3,
      title: "NextJS Introduction",
      url: "https://www.youtube.com/watch?v=Xcea1ZjHLk8&list=PLAEkrmc722rrg3aLy0esmE8ML7CTR-0un",
    },
    {
      id: 4,
      title: "Graph dynamique en ReactJS",
      url: "https://www.youtube.com/watch?v=2e-pHcRXmaA&list=PLAEkrmc722rrJbEv-NahE6I1q8yDo6YtE&index=2 ",
    },
    {
      id: 5,
      title: "Analyse dans le graph",
      url: "https://www.youtube.com/watch?v=lZkEkwwYQFw&list=PLAEkrmc722rrJbEv-NahE6I1q8yDo6YtE&index=4 ",
    },
    {
      id: 6,
      title: "Formation JS",
      url: "https://www.youtube.com/watch?v=pSyfkBS63aI&list=PLAEkrmc722roLTzSxHEmHSBszAHxGHzqe ",
    },
    {
      id: 7,
      title: "Ligne blanc",
      url: "https://www.youtube.com/watch?v=zQBks_4oxp4&list=PLAEkrmc722rpF3RW0bSM4VZ4E8SYkFT8r&index=6",
    },
    {
      id: 8,
      title: "Chaine de caractère en JS",
      url: "https://www.youtube.com/watch?v=Hwa0Y1P5QQw&list=PLAEkrmc722roLTzSxHEmHSBszAHxGHzqe&index=2 ",
    },
    {
      id: 9,
      title: "Type String en JS",
      url: "https://www.youtube.com/watch?v=T5eFhh33Ey0&list=PLAEkrmc722roLTzSxHEmHSBszAHxGHzqe&index=3 ",
    },
    {
      id: 10,
      title: "Type number en JS",
      url: "https://www.youtube.com/watch?v=fJqcp_c4r9A&list=PLAEkrmc722roLTzSxHEmHSBszAHxGHzqe&index=4 ",
    },
    {
      id: 11,
      title: "Type boolean en JS",
      url: " https://www.youtube.com/watch?v=84lArj0fkwE&list=PLAEkrmc722roLTzSxHEmHSBszAHxGHzqe&index=5",
    },
    {
      id: 12,
      title: "Type undefined",
      url: " https://www.youtube.com/watch?v=fZv_DJ1yOCc&list=PLAEkrmc722roLTzSxHEmHSBszAHxGHzqe&index=6",
    },

    {
      id: 13,
      title: "Suprimer windows filigrame",
      url: "https://www.youtube.com/watch?v=rXpg0MaNxTk&list=PLAEkrmc722rri8IF0LlpurvPYjp2NubWQ&index=3 ",
    },
    {
      id: 14,
      title: "Activer windows key",
      url: " https://www.youtube.com/watch?v=F47kZe9JzJM&list=PLAEkrmc722rri8IF0LlpurvPYjp2NubWQ&index=1",
    },
  ];

  // Gestion de la fin de la vidéo
  const handleVideoEnd = () => {
    alert("Vidéo terminée !");
  };

  return (
    <div className="bg-gradient-to-  to-gray-900 via-green-900 from-black  min-h-screen p-5">
      {/* Titre */}
      <div className="text-center mt-10">
        <h1 className=" font-extrabold text-5xl underline font-signature text-green-700 font-poppins ">
          Mes Vidéos de Programmation
        </h1>
        <p className="mt-3 mb-20 text-gray-200">
          Sélectionnez une vidéo pour la regarder quelquess une des mes contributions .
        </p>
      </div>

      {/* Conteneur principal */}
      <div className="flex flex-col  md:flex-row gap-2">
        {/* Liste des vidéos */}
        <div
          name="video"
          className="w-full md:w-1/3 'bg-gradient-to-b bg rounded-lg shadow-md max-h-[80vh] overflow-y-auto"
        >
          <h2 className="text-3xl text-center bg-gradient-to-b to-gray-900 via-green-900 font-signature from-black font-semibold text-white border-b border-yellow-500 pb- mb-3">
            Liste de quelques Vidéos
          </h2>
          <ul className="space-y-2">
            {videoList.map((video) => (
              <li
                key={video.id}
                onClick={() => setSelectedVideo(video.url)}
                className={`p-2 rounded-md cursor-pointer transition ${
                  selectedVideo === video.url
                    ? "bg-blue-600 text-green-300 font-bold text-xl text-center"
                    : "'bg-gradient-to-b from-gray-900 via-green-900  hover:bg-gray-600"
                }`}
              >
                {video.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Lecteur vidéo */}
        <div className="flex-grow bg-gradient-to-t from-green-500   rounded-lg shadow-md">
          <ReactPlayer
            url={selectedVideo}
            controls
            playing
            width="100%"
            height="460px"
            onEnded={handleVideoEnd}
            className="rounded-md"
          />
          <p className="mt-2 text-center font-bold text-2xl font-signature text-gray-900">
            Vidéo actuelle :{" "}
            {videoList.find((video) => video.url === selectedVideo)?.title ||
              "Pas de correspondance"}
          </p>
        </div>
      </div>
    </div>
  );
}
