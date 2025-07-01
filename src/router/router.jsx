import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import AllArticles from "../pages/allArticles/AllArticles";
import MyArticles from "../pages/myArticles/MyArticles";
import PostArticle from "../pages/postArticle/PostArticle";
import AboutUs from "../pages/Shared/AboutUs";
import Error from "../pages/Shared/Error";
import SignIn from "../signIn/SignIn";
import Register from "../pages/register/Register";
import PrivateRoute from "../routes/PrivateRoute";
import SingleArticle from "../components/SingleArticle";
import Categories from "../pages/Home/Categories";
import CategoryArticles from "../components/CategoryArticles";
import MyProfile from "../pages/profile/MyProfile";
import JoinAsContributor from "../pages/Footer/JoinAsContributor";
import ModerationPolicy from "../pages/Footer/ModerationPolicy";
import CommunityGuidelines from "../pages/Footer/CommunityGuidelines";
import AboutKnowvia from "../pages/Footer/AboutKnowvia";
import OurStory from "../pages/Footer/OurStory";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/allArticles",
        element: <AllArticles></AllArticles>,
      },
      {
        path: "/join-as-contributor",
        element: <JoinAsContributor />,
      },
      {
        path: "/moderation-policy",
        element: <ModerationPolicy />,
      },
      {
        path: "/community-guidelines",
        element: <CommunityGuidelines />,
      },
      {
        path: "/knowvia-about",
        element: <AboutKnowvia />,
      },
      {
        path: "/our-story",
          element: <OurStory/>
      },
      {
        path: "/myArticles",
        element: (
          <PrivateRoute>
            <MyArticles />
          </PrivateRoute>
        ),
      },
      {
        path: "/myProfile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/postArticle",
        element: (
          <PrivateRoute>
            <PostArticle />
          </PrivateRoute>
        ),
      },
      {
        path: "/articles/category/:category",
        element: (
          <PrivateRoute>
            <CategoryArticles />
          </PrivateRoute>
        ),
      },
      {
        path: "/articles/category/:categoryName",
        element: (
          <PrivateRoute>
            <Categories />
          </PrivateRoute>
        ),
      },
      {
        path: "/articles/:id",
        element: <SingleArticle />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
  {
    path: "/signIn",
    element: <SignIn></SignIn>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/*",
    element: <Error></Error>,
  },
]);

export default router;
