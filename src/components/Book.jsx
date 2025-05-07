import AuthorBP from "./BookParts/AuthorBP";
import PageCountBP from "./BookParts/PageCountBP";
import ReviewBP from "./BookParts/ReviewBP";
import TitleBP from "./BookParts/TitleBP";

export default function Book({ title, firstName, lastName, pageCount, textReview }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 mb-6 max-w-md hover:shadow-lg transition-shadow">
      <TitleBP bookTitle={title} />
      <AuthorBP firstName={firstName} lastName={lastName} />
      <PageCountBP pageCount={pageCount} />
      <ReviewBP textReview={textReview} />
    </div>
  );
}