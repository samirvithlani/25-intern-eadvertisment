import React from 'react'

export const AddScreen = () => {
  return (
    <div className="col-md-12">
  {/*begin::Quick Example*/}
  <div className="card card-primary card-outline mb-4">
    {/*begin::Header*/}
    <div className="card-header">
      <div className="card-title">Quick Example</div>
    </div>
    {/*end::Header*/}
    {/*begin::Form*/}
    <form>
      {/*begin::Body*/}
      <div className="card-body">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="input-group mb-3">
          <input type="file" className="form-control" id="inputGroupFile02" />
          <label className="input-group-text" htmlFor="inputGroupFile02">
            Upload
          </label>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
      </div>
      {/*end::Body*/}
      {/*begin::Footer*/}
      <div className="card-footer">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
      {/*end::Footer*/}
    </form>
    {/*end::Form*/}
  </div>
  {/*end::Quick Example*/}
  {/*begin::Input Group*/}
  <div className="card card-success card-outline mb-4">
    {/*begin::Header*/}
    <div className="card-header">
      <div className="card-title">Input Group</div>
    </div>
    {/*end::Header*/}
    {/*begin::Body*/}
    <div className="card-body">
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          @
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <span className="input-group-text" id="basic-addon2">
          @example.com
        </span>
      </div>
      <div className="mb-3">
        <label htmlFor="basic-url" className="form-label">
          Your vanity URL
        </label>
        <div className="input-group">
          <span className="input-group-text" id="basic-addon3">
            https://example.com/users/
          </span>
          <input
            type="text"
            className="form-control"
            id="basic-url"
            aria-describedby="basic-addon3 basic-addon4"
          />
        </div>
        <div className="form-text" id="basic-addon4">
          Example help text goes outside the input group.
        </div>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">$</span>
        <input
          type="text"
          className="form-control"
          aria-label="Amount (to the nearest dollar)"
        />
        <span className="input-group-text">.00</span>
      </div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
        />
        <span className="input-group-text">@</span>
        <input
          type="text"
          className="form-control"
          placeholder="Server"
          aria-label="Server"
        />
      </div>
      <div className="input-group">
        <span className="input-group-text">With textarea</span>
        <textarea
          className="form-control"
          aria-label="With textarea"
          defaultValue={""}
        />
      </div>
    </div>
    {/*end::Body*/}
    {/*begin::Footer*/}
    <div className="card-footer">
      <button type="submit" className="btn btn-success">
        Submit
      </button>
    </div>
    {/*end::Footer*/}
  </div>
  {/*end::Input Group*/}
  {/*begin::Horizontal Form*/}
  <div className="card card-warning card-outline mb-4">
    {/*begin::Header*/}
    <div className="card-header">
      <div className="card-title">Horizontal Form</div>
    </div>
    {/*end::Header*/}
    {/*begin::Form*/}
    <form>
      {/*begin::Body*/}
      <div className="card-body">
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="inputEmail3" />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="inputPassword3"
            />
          </div>
        </div>
        <fieldset className="row mb-3">
          <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
          <div className="col-sm-10">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios1"
                defaultValue="option1"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="gridRadios1">
                {" "}
                First radio{" "}
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios2"
                defaultValue="option2"
              />
              <label className="form-check-label" htmlFor="gridRadios2">
                {" "}
                Second radio{" "}
              </label>
            </div>
            <div className="form-check disabled">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios3"
                defaultValue="option3"
                disabled=""
              />
              <label className="form-check-label" htmlFor="gridRadios3">
                Third disabled radio
              </label>
            </div>
          </div>
        </fieldset>
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck1"
              />
              <label className="form-check-label" htmlFor="gridCheck1">
                Example checkbox
              </label>
            </div>
          </div>
        </div>
      </div>
      {/*end::Body*/}
      {/*begin::Footer*/}
      <div className="card-footer">
        <button type="submit" className="btn btn-warning">
          Sign in
        </button>
        <button type="submit" className="btn float-end">
          Cancel
        </button>
      </div>
      {/*end::Footer*/}
    </form>
    {/*end::Form*/}
  </div>
  {/*end::Horizontal Form*/}
</div>

  )
}
