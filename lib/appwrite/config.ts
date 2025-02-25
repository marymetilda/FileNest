export const appwriteConfig = {
  endPointUrl: process.env.NEXT_PUBLIC__APPWRITE_ENDPOINT!,
  projectId: process.env.NEXT_PUBLIC__APPWRITE_PROJECT!,
  databaseId: process.env.NEXT_PUBLIC__APPWRITE_DATABASE!,
  usersCollectionId: process.env.NEXT_PUBLIC__APPWRITE_USERS_COLLECTION!,
  filesCollectionId: process.env.NEXT_PUBLIC__APPWRITE_FILES_COLLECTION!,
  bucketId: process.env.NEXT_PUBLIC__APPWRITE_BUCKET!,
  secretKey: process.env.NEXT_APPWRITE_KEY!,
};
