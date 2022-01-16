import ButtonIcon from "components/ButtonIcon";

import './styles.css';

const ReviewCard = () => {
    return (
        <div className="base-card review-card">
            <form className="form-review">
            <div className="mb-4">
            <input
              type="text"
              className="form-control base-input"
              placeholder="Deixe sua avaliação aqui"
              name="review"
            />
            </div>
            <div className="auth-submit">
            <ButtonIcon text="SALVAR AVALIAÇÃO" />
          </div>
            </form>
        </div>
    );

}

export default ReviewCard;
