const EditIcon = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m14.36 4.079.927-.927a3.932 3.932 0 0 1 5.561 5.561l-.927.927m-5.56-5.561s.115 1.97 1.853 3.707C17.952 9.524 19.92 9.64 19.92 9.64m-5.56-5.561L12 6.439m7.921 3.2-5.26 5.262L11.56 18l-.16.161c-.578.577-.867.866-1.185 1.114a6.554 6.554 0 0 1-1.211.749c-.364.173-.751.302-1.526.56l-3.281 1.094m0 0-.802.268a1.06 1.06 0 0 1-1.342-1.342l.268-.802m1.876 1.876-1.876-1.876m0 0 1.094-3.281c.258-.775.387-1.162.56-1.526.205-.43.456-.836.749-1.211.248-.318.537-.607 1.114-1.184L8.5 9.939"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default EditIcon;
