import Header from "../components/Header";
import MainContent from "../components/MainContent";

export default function RootLayout() {
  return (
    <div>
      <Header />
      <div className="flex justify-center p-5">
        <div className="container">
          <MainContent />
        </div>
      </div>
    </div>
  );
}
