import {
	Html,
	Css,
	Dart,
	Express,
	Firebase,
	Flutter,
	Javascript,
	Mongo,
	NextJS,
	Node,
	PHP,
	React,
	Tailwind,
	Typescript,
} from '../assets'

const techs = [
		{
			id: 1,
			src: Html,
			title: 'HTML',
			style: 'shadow-orange-500',
		},

		{
			id: 2,
			src: Css,
			title: 'CSS',
			style: 'shadow-blue-300',
		},
		{
			id: 3,
			src: Javascript,
			title: 'JavaScript',
			style: 'shadow-yellow-500',
		},
		{
			id: 4,
			src: Typescript,
			title: 'TypeScript',
			style: 'shadow-blue-600',
		},
		{
			id: 5,
			src: Mongo,
			title: 'Mongo DB',
			style: 'shadow-green-500',
		},
		{
			id: 6,
			src: Express,
			title: 'Express JS',
			style: 'shadow-gray-300',
		},
		{
			id: 7,
			src: React,
			title: 'React JS',
			style: 'shadow-blue-400',
		},
		{
			id: 8,
			src: Node,
			title: 'Node JS',
			style: 'shadow-green-600',
		},
		{
			id: 14,
			src: Firebase,
			title: 'Firebase',
			style: 'shadow-yellow-600',
		},
		{
			id: 15,
			src: Flutter,
			title: 'Flutter',
			style: 'shadow-blue-500',
		},
		{
			id: 11,
			src: NextJS,
			title: 'Next JS',
			style: 'shadow-white',
		},
		{
			id: 16,
			src: PHP,
			title: 'PHP',
			style: 'shadow-indigo-500',
		},
		{
			id: 13,
			src: Dart,
			title: 'Dart',
			style: 'shadow-blue-300',
		},
		{
			id: 9,
			src: Tailwind,
			title: 'Tailwind CSS',
			style: 'shadow-teal-500',
		},
]

const Skills = () => {
  const [shuffledTechs, setShuffledTechs] = useState([]);

  useEffect(() => {
    // Fisher-Yates shuffle algorithm
    const shuffleArray = (array) => {
      const newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
    };

    setShuffledTechs(shuffleArray(techs));
  }, []);
	

	return (
		<div
			name="skills"
			className="bg-gradient-to-b from-black via-black to-gray-800 w-full min-h-screen h-full"
		>
			<div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
				<div>
					<p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
						Skills
					</p>
					<p className="py-6">These are the technologies I've worked with</p>
				</div>

				<div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12	sm:px-0">
{/* 					{techs.map(({ id, src, title, style }) => (
						<div
							key={id}
							className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
						>
							<img src={src} alt={title} className="w-20 mx-auto" />
							<p className="mt-4">{title}</p>
						</div>
					))} */}
					    {shuffledTechs.map(({ id, src, title, style }) => (
						      <div
						        key={id}
						        className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
						      >
						        <img src={src} alt={title} className="w-20 mx-auto" />
						        <p className="mt-4">{title}</p>
						      </div>
					    ))}
				</div>
			</div>
		</div>
	)
}

export default Skills
