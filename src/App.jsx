import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import ViewPostPage from "./page/ViewPostPage";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/post/:postId" element={<ViewPostPage />}></Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        toastOptions={{
          unstyled: true,
        }}
      />
    </>
  );
}

export default App;
