class OutfitsController < ApplicationController
  before_action :find_outfit, only: [:show, :destroy]
  # temp solution for ActionController::InvalidAuthenticityToken ERROR
  skip_before_action :verify_authenticity_token, only: [:create]

  def index
    @user = current_user
    @outfits = @user.outfits.order('id DESC')
    # @outfit.env_data = @env_data
    @env_data = EnvData.all
  end

  def new
    # @user = User.find(params[:user_id])
    @outfit = Outfit.new
  end

  def create
    # env_params["date"]  = Date.today
    @env_data = EnvData.new env_params
    @env_data.save

    # outfit_params["env_data_id"] = @env_id
    @outfit = Outfit.new outfit_params
    @outfit.env_data = EnvData.last
    if @outfit.save
      redirect_to outfits_path, notice: 'Outfit was created successfully.'
    else
      redirect_to styles_path
    end
  end

  def show
  end

  def destroy
    user = current_user
    outfits = user.outfits
    outfits.delete(params[:id])
    redirect_to :back
  end

  private
  def env_params
    params.require(:env_data).permit(:user_id, :location, :weather_temp, :weather_state, :date)
  end

  def outfit_params
    params.require(:outfits).permit(:dress, :dress_url,:top, :top_url,:bottom, :bottom_url,:shoe, :shoe_url,:access_1, :access_1_url,:access_2, :access_2_url, :user_id, :env_data_id)
  end
  # def outfit_params
  #   params.require(:outfits).permit(:dress, :dress_url,:top, :top_url,:bottom, :bottom_url,:shoe, :shoe_url,:access_1, :access_1_url,:access_2, :access_2_url, :user_id, :env_data_id)
  # end

  def find_outfit
    @outfit = Outfit.find(params[:id])
  end
end
