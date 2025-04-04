import { ObjectId } from "mongoose";
import PostModel from "../models/post.models";
import { connectToDB } from "../mongoose";


interface Post {  // Add Post interface to match what your component expects
    _id: string;
    title: string;
    description: string;
    createdAt: Date;
}

export const fetchPosts = async (): Promise<Post[]> => {
    try {
        // Temporary mock data - remove once DB is working
        const mockPosts: Post[] = [
            {
                _id: "1",
                title: "Sample Post 1",
                description: "This is a sample post description",
                createdAt: new Date("2023-01-01T00:00:00Z"),
            },
            // Add more mock posts as needed
        ];
        return mockPosts;

        // Uncomment this once DB is ready:
        // connectToDB();
        // const posts = await PostModel.find().sort({ createdAt: -1 });
        // return posts.map(post => ({
        //     _id: post._id.toString(),
        //     title: post.title,
        //     description: post.description,
        //     createdAt: post.createdAt
        // }));
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw new Error('Error fetching posts');
    }
};

export async function findPostById(id: string): Promise<any | null> {
    connectToDB();

    try {
        const post = await PostModel.findById(id);
        return post;
    } catch (error) {
        throw new Error('Error finding post by ID');
    }
}

// export async function deletePost(id: ObjectId): Promise<any[]> {
//     connectToDB();

//     try {
//         const deletePost = await PostModel.findByIdAndDelete(id, (err: any) => {
//             throw new Error(`Error: ${err.message}`)
//         });
//     } catch (error) {
//         throw new Error('Error fetching projects');
//     }
// }