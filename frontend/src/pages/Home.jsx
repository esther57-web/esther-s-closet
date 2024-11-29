
import Banner from "../components/Banner"
import avatar from '../assets/images/avatar-esther.png'
import Latest from "../components/Latest"
import AddArticleForm from "../components/Admin/AddArticleForm"

export const Home = () => {
  
  return (
    <main className="flex flex-col gap-8">
      <Banner title="Achetez maintenant" url={avatar} />
      <Latest />
      <AddArticleForm />
    </main>
    
  )
}
