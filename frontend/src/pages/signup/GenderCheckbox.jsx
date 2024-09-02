const GenderCheckBox = ({onChangeCheckBox, selectedGender}) => {
  return (
    <div className="flex">
      <div className="form-control ">
        <label className={`label gap-2 cursor-pointer ${selectedGender === 'male' ? 'selected' : ''}`}>
          <span className="label-text  text-slate-200">Male</span>
          <input type="checkbox" className="checkbox border-slate-200" 
          checked={selectedGender === 'male'}
          onChange={() => onChangeCheckBox("male")}
          />

        </label>
      </div>

      <div className="form-control">
        <label className={`label gap-2 cursor-pointer ${selectedGender === 'male' ? 'selected' : ''}`}>
          <span className="label-text  text-slate-200">Female</span>
          <input type="checkbox" className="checkbox border-slate-200"
           checked={selectedGender === 'female'}
           onChange={() => onChangeCheckBox("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
