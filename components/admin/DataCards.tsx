import { fetchPosts } from '@/lib/actions/post.actions';
import { fetchProjects } from '@/lib/actions/projects.actions';

interface DataItem {
    _id: string; // Match the actual property name
    title: string; // Required, as per the Post interface
    description: string; // Required, as per the Post interface
}

const DataCards = async ({ fetchWhat }: { fetchWhat: string }) => {
    let dataSet: DataItem[] = [];

    if (fetchWhat === "posts") {
        dataSet = await fetchPosts();
    }
    if (fetchWhat === "projects") {
        dataSet = await fetchProjects();
    }

    return (
        <div className="grid gap-4">
            {dataSet.map((item) => (
                <div key={item._id} className="p-4 border rounded-lg">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default DataCards;