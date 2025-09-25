import cssIcon from '../../assets/images/Icons/css-3-icon.svg';
import gitHubIcon from '../../assets/images/Icons/github-icon.svg';
import reactIcon from '../../assets/images/Icons/reactjs.svg';
import jsIcon from '../../assets/images/Icons/javascript-icon.svg';
import tailwindIcon from '../../assets/images/Icons/tailwindcss.svg';
import htmlIcon from '../../assets/images/Icons/html5-icon.svg';
import vscodeIcon from '../../assets/images/Icons/vscode.svg';
import nodeIcon from '../../assets/images/Icons/nodejs.svg';
import insomniaIcon from '../../assets/images/Icons/insomnia.svg';

const iconsList = [
  cssIcon,
  htmlIcon,
  gitHubIcon,
  reactIcon,
  jsIcon,
  tailwindIcon,
  vscodeIcon,
  nodeIcon,
  insomniaIcon,
];

export function TechologieList() {
  return (
    <div className='flex flex-wrap gap-6 justify-around p-6 bg-[#1a213dc9] rounded-4xl'>
      {iconsList.map((item, index) => (
        <div key={index} className='flex items-center justify-center'>
          {item === gitHubIcon ? (
            <div className='bg-white p-1 rounded-2xl flex items-center justify-center'>
              <img
                src={item}
                alt='GitHub'
                className='w-15 h-15 sm:w-20 sm:h-20'
              />
            </div>
          ) : (
            <img
              src={item}
              alt={`Icon ${index}`}
              className='w-15 h-15 sm:w-20 sm:h-20'
            />
          )}
        </div>
      ))}
    </div>
  );
}
