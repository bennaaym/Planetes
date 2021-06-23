import { useContext } from "react";
import { useHistory } from "react-router";
import ArticleResume from "./article/ArticleReume"
import { DBContext } from "../../contexts/DBContext";


const Experiences = () => {

    const {articles} = useContext(DBContext);
    const history = useHistory();

    const handleShareButton = () =>{
        history.push('/add-experience');
    }

    return (
        <div className="grid grid-cols-12 px-8 grap-1 pt-32 h-full w-full">
            <div className='col-span-8'>
                {
                    articles &&
                    articles.map((article)=>{
                        return (
                            <ArticleResume 
                                key={article.id}
                                article={article}
                            />
                        )
                    })
                }
            </div>

            <div className='flex flex-col items-center text-center col-start-10 col-span-3 border-l border-gray-700 text-white'>
                <h2 className="w-full text-xl mb-4 font-bold tracking-wider mt-7">
                    share your experience
                </h2>
                <button 
                        onClick={handleShareButton}
                        className="bg-indigo-dark hover:bg-indigo-medium text-indigo-white font-black uppercase tracking-wider py-2 px-4 rounded focus:outline-none"
                        >                        
                        add article
                </button>
            </div>
        
        </div>
    );
}
 
export default Experiences;