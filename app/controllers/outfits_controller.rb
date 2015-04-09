class OutfitsController < ApplicationController
  before_action :find_outfit, only: [:show, :destroy]
  def index
    @outfits = Outfits.all
  end

  def create
    Outfit.create outfit_parms
    redirect_to outfits_index_path
  end

  def new
    @outfit.new
  end

  def show
  end

  def destroy
    @outfit.destroy
    redirect_to outfits_index_path
  end

  private
  def outfit_params
    params.require(:outfits).permit(:dress, :dress_url,:top, :top_url,:bottom, :bottom_url,:shoe, :shoe_url,:access_1, :access_1_url,:access_2, :access_2_url, :user_id, :env_data_id)
  end

  def find_outfit
    @outfit = Outfit.find(params[:id])
  end
end
